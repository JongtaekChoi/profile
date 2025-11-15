import { ReactNode, useEffect, useState } from "react";

import { Blurhash } from "react-blurhash";
import styled from "@emotion/styled";

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/profile/orion.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundBlurhash = styled(Blurhash)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default function Container({ children }: { children: ReactNode }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const img = new Image();
    img.src = "/profile/orion.jpg"; // 큰 이미지 URL
    img.onload = () => {
      setImageLoaded(true);
      setImageUrl(img.src);
    };
  }, []);

  return (
    <BaseContainer>
      <div>
        <Background style={{ backgroundImage: imageUrl && `url(${imageUrl})` }}>
          {!imageLoaded && (
            <BackgroundBlurhash
              hash="L00l*jWBWBfQofoff6ayaefkkCj["
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </Background>
      </div>
      <BaseContainer>{children}</BaseContainer>
    </BaseContainer>
  );
}
