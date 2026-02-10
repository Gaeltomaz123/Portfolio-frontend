import NavLink from "./NavLink"

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex felx-col py-4 items-center">{links.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
            ))}
        </ul>
    )
}

export default MenuOverlay