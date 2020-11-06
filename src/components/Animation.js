import * as React from "react";
import { useDencrypt } from "use-dencrypt-effect";
import styled from "styled-components/macro";
const Container = styled.div`
  font-size: 2rem;
  color: white;
`;

const Animation = ({ theLuckyOne }) => {
  const [finished, setFinished] = React.useState(false);
  let values = ["Lucky fish", theLuckyOne];
  React.useEffect(() => {
    setFinished(false);
  }, [theLuckyOne]);
  const { result, dencrypt } = useDencrypt();
  React.useEffect(() => {
    if (!finished) {
      let i = 0;

      const action = setInterval(() => {
        dencrypt(values[i]);

        i = i === values.length - 1 ? 0 : i + 1;
        if (i === 0) {
          setFinished(true);
          clearInterval(action);
        }
      }, 1000);

      return () => clearInterval(action);
    }
  });

  return <Container>{result}</Container>;
};
export default Animation;
