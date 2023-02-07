import styled from "styled-components";

const TextAnimationBlock = styled.div`
  text-align: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 25vmin;
    line-height: 20vmin;
  }

  .animated-text {
    color: transparent;
    background: conic-gradient(
      #d9d7f1 12%,
      #baabda 12%,
      #baabda 33%,
      #e7fbbe 33%,
      #e7fbbe 55%,
      #ffcbcb 55%,
      #ffcbcb 70%,
      #b5deff 70%,
      #b5deff 87%,
      #f7d1ba 87%
    );
    background-size: 50%;
    background-clip: text;
    -webkit-background-clip: text;

    animation: expand-rev 0.5s ease forwards;

    cursor: pointer;

    &:hover {
      animation: expand 0.5s ease forwards;
    }
  }

  @keyframes expand {
    0% {
      background-size: 50%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 300%;
      background-position: -15em -4em;
    }
  }

  @keyframes expand-rev {
    0% {
      background-size: 100%;
      background-position: -10em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 50%;
      background-position: 0 0;
    }
  }
`;

export default function About() {
  return (
    <>
      <TextAnimationBlock>
        <h1 class="animated-text">Hello World!</h1>
      </TextAnimationBlock>
    </>
  );
}
