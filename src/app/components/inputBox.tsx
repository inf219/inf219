

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeHolder?: string;
    type?: string;
};

export default function InputBox({
    value,
    onChange,
    placeHolder = '',
    type = 'text',
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-400 rounded px-3 py-2 mb-4 w-full bg-white">
        </input>
    )
}