import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import defaultImage from "./images/default.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import Zoom from "@material-ui/core/Zoom";

import styles from "./MyStyles";
import * as classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileImage: [] };
  }

  handleClickImage = (number) => {
    alert(number);
  };

  handleClickAvatar = (number) => {
    alert(number);
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { profileImage } = this.state;
        this.setState({
          profileImage: [
            {
              id: uuidv4(),
              image: reader.result,
            },
            ...profileImage,
          ],
        });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { classes } = this.props;
    const { profileImage } = this.state;

    const cardClasses = {
      card1: {
        card: classes.card1,
        image: classes.imageDiv1,
        string: classes.verticalString1,
      },
      card2: {
        card: classes.card2,
        image: classes.imageDiv2,
        string: classes.verticalString2,
      },
      card3: {
        card: classes.card3,
        image: classes.imageDiv3,
        string: classes.verticalString3,
      },
      card4: {
        card: classes.card4,
        image: classes.imageDiv4,
        string: classes.verticalString4,
      },
      card5: {
        card: classes.card5,
        image: classes.imageDiv5,
        string: classes.verticalString5,
      },
      card6: {
        card: classes.card6,
        image: classes.imageDiv6,
        string: classes.verticalString6,
      },
      card7: {
        card: classes.card7,
        image: classes.imageDiv7,
        string: classes.verticalString7,
      },
      card8: {
        card: classes.card8,
        image: classes.imageDiv8,
        string: classes.verticalString8,
      },
    };
    let newClassName;
    profileImage.length < 8
      ? (newClassName = classNames(classes.gallery, classes.justifyCenter))
      : (newClassName = classes.gallery);

    return (
      <div className={classes.mainDiv}>
        <h1 className={classes.heading}>Photo Gallery</h1>
        <div className={classes.galleryOuterDiv}>
          <div className={newClassName}>
            <div
              className={classNames(classes.card, classes.uploadImgLeftBtnCard)}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.uploadImgLeftBtnVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.uploadImgLeftBtnDiv)}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={this.imageHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    <p className={classes.btnText}>
                      <AddCircleOutlineIcon className={classes.btnIcon} />
                      <br />
                      Upload Photos
                    </p>
                  </Button>
                </label>
              </div>
            </div>
            {profileImage.map((data, index) => {
              const cardClassKey = `card${
                ((profileImage.length - index) % 8) + 1
              }`;
              const cardClass = cardClasses[cardClassKey];

              return (
                <Zoom in={true} timeout={1000} key={data.id}>
                  <div className={classNames(classes.card, cardClass.card)}>
                    <Avatar
                      alt="R"
                      src="/static/images/avatar/1.jpg"
                      onClick={() => this.handleClickAvatar(index)}
                      className={classes.avatar}
                    />
                    <div
                      className={classNames(
                        classes.verticalString,
                        cardClass.string
                      )}
                    ></div>
                    <div className={classes.clipCircle}></div>
                    <div className={classes.clipRectangle}></div>
                    <div
                      className={classNames(
                        classes.imageDivBorder,
                        cardClass.image
                      )}
                    >
                      <img
                        src={data.image}
                        alt="image1"
                        className={classes.imageCSS}
                        onClick={() => this.handleClickImage(index)}
                      />
                    </div>
                  </div>
                </Zoom>
              );
            })}

            <div className={classNames(classes.card, classes.card1)}>
              <Avatar
                alt="R"
                src="/static/images/avatar/1.jpg"
                className={classes.avatar}
              />
              <div
                className={classNames(
                  classes.verticalString,
                  classes.verticalString1
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div
                className={classNames(
                  classes.imageDivBorder,
                  classes.imageDiv1
                )}
              >
                <img
                  src={defaultImage}
                  alt="image1"
                  className={classes.imageCSS}
                />
              </div>
            </div>

            {/* Card10 */}
            <div
              className={classNames(
                classes.card,
                classes.uploadImgRightBtnCard
              )}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.uploadImgRightBtnCardVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.uploadImgRightBtnDiv)}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    <p className={classes.btnText}>
                      <AddCircleOutlineIcon className={classes.btnIcon} />
                      <br />
                      Upload Photos
                    </p>
                  </Button>
                </label>
              </div>
            </div>
            {/* Card11 */}
            <div
              className={classNames(classes.card, classes.shareOnFacebookCard)}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.shareOnFacebookCardVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.shareOnFacebookCardButtonDiv)}>
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  className={classes.button}
                >
                  <p className={classes.btnText}>
                    Share This Page
                    <br />
                    <FacebookIcon className={classes.btnIcon} />
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
