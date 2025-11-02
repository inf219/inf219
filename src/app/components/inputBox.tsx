

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
            className={`border border-gray-600 rounded mb-4 bg-white px-2 py-2 w-104 ${sizeClasses[size]}`}>
        </textarea>
    )
}