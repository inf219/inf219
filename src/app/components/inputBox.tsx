

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
            className={`border border-slate-300 rounded-lg mb-4 bg-white px-2 py-2 w-full 
                text-slate-900 placeholder:text-slate-400 hover:bg-slate-50 ${sizeClasses[size]}`}>
        </textarea>
    )
}