import styled from "@emotion/styled";

const IconImg = styled.img`
  width: 1em;
  height: 1em;
`;

export default function RowLink({
  href,
  src,
  children,
  alt,
}: {
  href: string;
  src: string;
  children: string;
  alt?: string;
}) {
  return (
    <div>
      <a className="row github" href={href}>
        <IconImg src={src} className="linkicon" alt={alt} />
        {children}
      </a>
    </div>
  );
}
