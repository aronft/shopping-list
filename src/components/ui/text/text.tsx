import { ElementType } from 'react';

const textClasses = {
    white: 'text-white',
    primary: 'text-primary',
    black: 'text-black',
};

type TextProps = {
    className?: string;
    children: string;
    size?: string;
    tag?: ElementType;
    color?: 'primary' | 'white' | 'black';
};

export const Text = ({
    className,
    children,
    tag: Tag = 'p',
    color = 'white',
}: TextProps) => {
    return (
        <Tag className={` ${textClasses[color]} ${className}`}>{children}</Tag>
    );
};
