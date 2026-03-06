import React from 'react';

const ResolveTask = ({resolveTaskComplete}) => {
    // console.log(resolveTaskComplete)
    return (
        <div>
            {
                resolveTaskComplete.map(task =>
                    <div className='bg-white px-3 py-2 rounded-md mt-4'>
                        <h3 className='text-sm'>Task: {task.title}</h3>
                        <h3 className='text-xl font-bold'>Incorrect Billing Address</h3>
                    </div>
                )
            }
        </div>
    );
};

export default ResolveTask;