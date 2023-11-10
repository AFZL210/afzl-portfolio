import tw from 'tailwind-styled-components'

export const Div = tw.div<{ $theme?: string }>`
    ${(p) => p.$theme == "light" ? "bg-light-primary text-black" : "bg-dark-primary text-white"}
`;

export const NavDiv = tw.div<{ $theme?: string }>`
    ${(p) => p.$theme == "light" ? "bg-light-secondary text-black" : "bg-dark-primary text-white"}
`;