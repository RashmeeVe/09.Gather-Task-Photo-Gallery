import styles from "./MyStyles";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import * as classNames from "classnames";
import div2Image from "./images/2.jpeg";
import div3Image from "./images/3.jpg";
import div4Image from "./images/4.jpg";
import div5Image from "./images/5.jpg";
import div6Image from "./images/6.jpg";
import div7Image from "./images/7.jpeg";
import div8Image from "./images/8.jpeg";
import div9Image from "./images/9.jpeg";

function App(props) {
  const { classes } = props;

  const handleClickImage = (number) => {
    alert(number);
  };

  const handleClickAvatar = (number) => {
    alert(number);
  };

  return (
    <div className={classes.mainDiv}>
      <h1>Photo Gallery</h1>
      <div className={classes.galleryOuterDiv}>
        <div className={classes.gallery}>
          <div className={classNames(classes.card, classes.card1)}>
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString1
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div className={classNames(classes.imageDiv1)}>
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

          {/* Card2 */}
          <div className={classNames(classes.card, classes.card2)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(2)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString2
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv2)}
            >
              <img
                src={div2Image}
                alt="image2"
                className={classes.imageCSS}
                onClick={() => handleClickImage(2)}
              />
            </div>
          </div>

          {/* Card3 */}
          <div className={classNames(classes.card, classes.card3)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(3)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString3
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv3)}
            >
              <img
                src={div3Image}
                alt="image3"
                className={classes.imageCSS}
                onClick={() => handleClickImage(3)}
              />
            </div>
          </div>

          {/* Card4 */}
          <div className={classNames(classes.card, classes.card4)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(4)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString4
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv4)}
            >
              <img
                src={div4Image}
                alt="image4"
                className={classes.imageCSS}
                onClick={() => handleClickImage(4)}
              />
            </div>
          </div>

          {/* Card5 */}
          <div className={classNames(classes.card, classes.card5)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(5)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString5
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv5)}
            >
              <img
                src={div5Image}
                alt="image5"
                className={classes.imageCSS}
                onClick={() => handleClickImage(5)}
              />
            </div>
          </div>

          {/* Card6 */}
          <div className={classNames(classes.card, classes.card6)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(6)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString6
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv6)}
            >
              <img
                src={div6Image}
                alt="image6"
                className={classes.imageCSS}
                onClick={() => handleClickImage(6)}
              />
            </div>
          </div>

          {/* Card7 */}
          <div className={classNames(classes.card, classes.card7)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(7)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString7
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv7)}
            >
              <img
                src={div7Image}
                alt="image7"
                className={classes.imageCSS}
                onClick={() => handleClickImage(7)}
              />
            </div>
          </div>

          {/* Card8 */}
          <div className={classNames(classes.card, classes.card8)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(8)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString8
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv8)}
            >
              <img
                src={div8Image}
                alt="image8"
                className={classes.imageCSS}
                onClick={() => handleClickImage(8)}
              />
            </div>
          </div>

          {/* Card9 */}
          <div className={classNames(classes.card, classes.card9)}>
            <Avatar
              alt="R"
              src="/static/images/avatar/1.jpg"
              onClick={() => handleClickAvatar(9)}
              className={classes.avatar}
            />
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString9
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div
              className={classNames(classes.imageDivBorder, classes.imageDiv9)}
            >
              <img
                src={div9Image}
                alt="image9"
                className={classes.imageCSS}
                onClick={() => handleClickImage(9)}
              />
            </div>
          </div>

          {/* Card10 */}
          <div className={classNames(classes.card, classes.card10)}>
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString10
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div className={classNames(classes.imageDiv10)}>
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
          <div className={classNames(classes.card, classes.card11)}>
            <div
              className={classNames(
                classes.verticalString,
                classes.verticalString11
              )}
            ></div>
            <div className={classes.clipCircle}></div>
            <div className={classes.clipRectangle}></div>
            <div className={classNames(classes.imageDiv11)}>
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

export default withStyles(styles)(App);
