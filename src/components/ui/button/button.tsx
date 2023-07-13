const buttonClasses = {
    primary: 'text-white bg-yellow-700',
};

type ButtonProps = {
    className: string;
    bgColor?: 'primary';
};

export const Button = ({ className, bgColor = 'primary' }: ButtonProps) => {
    return (
        <div className={` ${buttonClasses[bgColor]} ${className}`}>Button</div>
    );
};
