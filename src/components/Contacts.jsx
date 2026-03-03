import { teachers } from '../contacts/teacher.json';

export function Contacts() {
    // console.log(teachers)
    return (
        <div className='pt-2'>
            <strong className=''>contacts</strong>
            <ul className='w-full h-64 overflow-auto border-y-2 border-white space-y-1'>
                {teachers.map((e, i) =>
                    <li key={i} className='flex flex-col border rounded border-white  p-1'>
                        <h2>{e?.name}</h2>
                        {e?.subjects && <div className='flex flex-row gap-2'>{e?.subjects.map((e2, i2) => <p key={i2}>{e2}</p>)}</div>}
                        {e?.telegram && <a target='_blank' href={`https://t.me/${e?.telegram}`} className='cursor-pointer hover:text-blue-300'>{e?.telegram}</a>}
                        {e?.telegram_number && <p className='cursor-pointer hover:text-blue-300'>{e?.telegram_number}</p>}
                        {e?.email && <a target='_blank' href={`mailto:${e?.email}`} className='cursor-pointer hover:text-blue-300'>{e?.email}</a>}
                        {e?.vk && <a target='_blank' href={`https://vk.com/${e?.vk}`} className='cursor-pointer hover:text-blue-300'>{e?.vk}</a>}
                    </li>)}
            </ul>
        </div>
    )
}