import { TrendingUp } from 'lucide-react';

const CardDefault = ({ title, Icon, number, percent, bg, color }) => {

    return (
        <div className='bg-white rounded-xl p-4'>
            <div className='flex items-center gap-2 text-gray-300 mb-3'>
                <div className={`rounded-full p-2`} style={{ backgroundColor: bg, color: color }}>
                    <Icon size={15}/>
                </div>
                <span className='text-xs'>{title}</span>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-[20px] font-extrabold text-gray-600'>{number}</h3>
                <div className='flex items-center gap-2 text-sm font-bold text-emerald-300'>
                    <TrendingUp size={15}/>
                    <span>{percent}%</span>
                </div>
            </div>
        </div>
    )
}

export default CardDefault