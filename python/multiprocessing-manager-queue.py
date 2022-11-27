#minimal multiprocessing example with interprocess communication via manager queue

import multiprocessing

fn = 'output.txt'

def worker(arg, q):
    res = 'processing'
    q.put(res)
#    return

def listener(q):
    with open(fn, 'w') as f:
        while True:
            m = q.get()
            if m == 'kill':
                #f.write('process killed')
                break
            f.write(str(m) + '\n')
            f.flush()

if __name__ == "__main__":
    manager = multiprocessing.Manager()
    q = manager.Queue()    
    pool = multiprocessing.Pool()

    listen = pool.apply_async(listener, (q,))

    jobs = []
    for i in range(10):
        job = pool.apply_async(worker, (i, q))
        jobs.append(job)

    for job in jobs: 
        job.get()

    q.put('kill')
    pool.close()
    pool.join()
