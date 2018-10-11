import * as React from "react";
import "../index.css";

export interface Props {
  img: string;
}

class SectionAlbum extends React.Component {
  render() {
    return (
      <section style={{ backgroundImage: 'url(/static/media/Subhive_Origin.58f85a18.png)' }} id="subhiveOrigin"> {/* Kan ikke linke billede i prop */}
        <div className="container-16">
          <p>Hey does this work my good sir?</p>
        </div>
      </section>
    );
  }
}
export default SectionAlbum;