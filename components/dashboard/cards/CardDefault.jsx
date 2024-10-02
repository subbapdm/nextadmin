import { TrendingUp } from 'lucide-react';

const CardDefault = ({ title, icon: Icon, number, percent, background, variant }) => {

    return (
        <div className={`rounded-xl flex p-4 ${variant === 'dark' ? 'bg-cyan-700' : 'bg-white '}`}>
            <div className='flex-2'>
                <div className='flex items-center gap-2 text-gray-400 font-medium mb-3'>
                    <div className={`${variant === 'dark' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-cyan-500'} rounded-full p-2`}>
                        <Icon size={20}/>
                    </div>
                    <span className={`${variant === 'dark' ? 'text-white' : ''} text-sm`}>{title}</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className={`${variant === 'dark' ? 'text-white' : 'text-gray-800'} text-[25px] font-extrabold`}>${number}</h3>
                    <div className={`${variant === 'dark' && 'text-teal-300'} flex items-center gap-2 text-xs text-emerald-400`}>
                        <TrendingUp size={15}/>
                        <span className='font-bold'>{percent}%</span>
                        <span className={`${variant === 'dark' && 'text-white'} text-xs text-gray-300`}>+2.5 from last month</span>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                
            </div>
        </div>
    )
}

export default CardDefault