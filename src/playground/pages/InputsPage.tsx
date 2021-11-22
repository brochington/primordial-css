import React, { FC } from 'react';

type Props = {
  
};

const InputsPage: FC<Props> = (props: Props) => {
  const {  } = props;

  return (
    <div>
      <h1>Inputs</h1>

      <div>
        <h2>Variants</h2>
        <div className="row gap3">
          <div>
            <div className="mb3 column mb4">
              <label p-position="top">Standard Input (label top)</label>
              <input type="text" p-variant="outline" placeholder="Placeholder Text" />
            </div>
            <div className="mb3 row gap1">
              <label p-position="left">
                Standard Input (label left)
                <input type="text" p-variant="outline" placeholder="Placeholder Text" />
              </label>
            </div>
          </div>

          <div>
            <div className="mb3 column mb4">
              <label p-position="top">Error Input using HTML form validation</label>
              <input
                type="text"
                p-variant="outline"
                placeholder="Placeholder Text"
                required
                p-validate=""
                minLength={10}
              />
            </div>
            <div className="mb3">
              <label p-position="top">Using "p-error=true"</label>
              <input type="text" p-variant="outline" placeholder="Placeholder Text" />
            </div>
          </div>

          <div>
            <div className="mb3 column mb4">
              <label p-position="top">Success Input using HTML form validation</label>
              <input type="text" p-variant="outline" placeholder="Placeholder Text" required />
            </div>
            <div className="mb3">
              <label p-position="top">{`Using "p-error=true"`}</label>
              <input type="text" p-variant="outline" p-error="true" placeholder="Placeholder Text" />
            </div>
          </div>

          <div>
            <div className="mb3 column mb4">
              <label p-position="top">Standard Input (label top)</label>
              <input type="text" p-variant="outline" placeholder="Placeholder Text" disabled />
            </div>
            <div className="mb3 row">
              <label p-position="left">
                Standard Input (label left)
                <input type="text" p-variant="outline" placeholder="Placeholder Text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsPage;
