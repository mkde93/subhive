import * as React from "react";

export interface Props {
  backgroundImage: string;
}

class SectionInstagram extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="spotifySection">
        <div className="width-90">
          <div className="desc spotify-flex">
            <div>
              <h1>Instagram</h1>
              <h3>Stories and pictures from our events</h3>
            </div>
            <div className="buttons spotify">
              <a href={"#"} target={"_blank"}>
                <div className="spotify"><img src={require("../img/icons/instagram.svg")} />Follow</div>
              </a>
            </div>
          </div>
          <div className="spotifyPlaylist">
          </div>
        </div>
      </section>
    );
  }
}
export default SectionInstagram;