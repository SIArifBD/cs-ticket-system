import React from 'react';
import { toast } from 'react-toastify';

const TaskStates = ({ taskClicked, setResolveTask, resolveTaskComplete, setResolveTaskComplete, setTicketStatistics }) => {

    const handleResolveTask = (task) => {
        const alreadyCompleted = resolveTaskComplete.some(t => t.id === task.id);
        if (alreadyCompleted) {
            toast("Task already completed");
            return;
        }
        setResolveTask(prev => prev + 1);
        setResolveTaskComplete(prev => [...prev, task]);
        setTicketStatistics(prev => prev > 0 ? prev - 1 : 0);
    };

    return (
        <div>
            {
                taskClicked.map(task =>
                    <div key={task.id} className='bg-white px-3 py-2 rounded-md mt-4'>
                        <h3 className='text-xl font-bold'>{task.title}</h3>

                        <button
                            onClick={() => handleResolveTask(task)}
                            className='btn bg-success w-full mt-3 text-white'
                        >
                            Complete
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default TaskStates;