import './Header.css'
type HeaderProps = {
  children: string;
}

// to do: improve header styling
export const Header = ({ children }: HeaderProps) => (
  <header className="header">
    {children}
    <hr className="header-divider"/>
  </header>
)