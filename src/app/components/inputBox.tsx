

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeHolder?: string;
    size?: 'small' | 'medium' | 'large';
};

export default function InputBox({
    value,
    onChange,
    placeHolder = '',
    size = 'small',
}: InputProps) {

    const sizeClasses = {
        small: 'h-12 text-base',
        medium: 'h-18 text-base',
        large: 'h-64 text-base',
    };

    return (
        <textarea
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`border border-cyan-400/25 focus:border-cyan-400/70 rounded-lg mb-4 
                bg-blue-200 px-2 py-2 w-full 
                ring-1 ring-cyan-400/10
                text-slate-800 placeholder:text-slate-500 hover:bg-blue-100 shadow-[0_0_8px_rgba(34,211,238,0.3)] ${sizeClasses[size]}`}>
        </textarea>
    )
}