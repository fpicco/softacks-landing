import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded-lg hover:scale-105 active:scale-95`;
  const styles = primary
    ? `text-white bg-gradient-to-bl from-primary to-secondary hover:bg-gradient-to-br`
    : `bg-white text-primary border-primary hover:bg-primary hover:text-white`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
