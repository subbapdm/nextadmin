import { TrendingUp } from 'lucide-react';

const CardDefault = ({ title, Icon, number, percent, background }) => {

    return (
        <div className='bg-white rounded-xl p-4' style={{ backgroundColor: background }}>
            <div className='flex items-center gap-2 text-gray-400 mb-3'>
                <div className={`${background && 'bg-cyan-700 text-white'} rounded-full bg-gray-100 text-gray-400 p-2`}>
                    <Icon size={15}/>
                </div>
                <span className={`${background && 'text-white'} text-xs`}>{title}</span>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className={`${background && 'text-white'} text-[25px] font-extrabold text-gray-700`}>${number}</h3>
                <div className={`${background && 'text-teal-300'} flex items-center gap-2 text-xs text-emerald-400`}>
                    <TrendingUp size={15}/>
                    <span className='font-bold'>{percent}%</span>
                    <span className={`${background && 'text-white'} text-xs text-gray-300`}>+2.5 from last month</span>
                </div>
            </div>
        </div>
    )
}

export default CardDefault