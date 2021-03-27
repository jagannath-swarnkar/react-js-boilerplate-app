import React from "react";
//material ui dialog component
import Dialog from "@material-ui/core/Dialog";
//material ui dialog content
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
// import ToasterDrawer from "../drawer/toaster-drawer/toaster-drawer";

const styles = {
  root: {
    padding: "0px !important",
    overflowX: "hidden",
  },
  outerBox: {
    borderRadius: "8px !important",
    margin: "5px",
  },
};

const ModalDialog = (props) => {
  let { classes, dialogData } = props;
  let dialogContent = () => {
    switch (props.type) {
      case "WalletFilter":
        return (<></>
          // <ToasterDrawer
          //   {...props.dialogData}
          //   handlerDialog={props.handlerDialog}
          //   onClose={props.handleClose}
          // />
        );

      default:
        return <div>empty</div>;
    }
  };
  // let dialogContent = () => {
  //   switch (props.type) {
  //     case "WalletFilter":
  //       return <h1>demo</h1>;
  //       break;
  //     default:
  //       return <div>empty</div>;
  //   }
  // };

  return (
    //dialog component
    <Dialog
      test="dialog"
      open={props.open}
      onBackdropClick={
        dialogData && dialogData.dialogClick
          ? dialogData.dialogClick
          : props.handleClose
      }
      className={`${classes.outerBox} ${
        dialogData && dialogData.outerBox
      }  mu-dialog`}
      onClose={props.handleClose}
      disableBackdropClick={props.disableBackdropClick}
      classes={{
        paper: classes.outerBox,
      }}
      {...props.dialogModel}>
      <DialogContent
        test="DialogContent"
        className={classes.root}>
        <div className="w-100">{dialogContent()}</div>
      </DialogContent>
      <style jsx>{`
        :global(.mu-dialog > div > div) {
          overflow-y: visible !important;
        }
        :global(.mu-dialog) {
          margin: 11px !important;
        }
        :global(.MuiDialog-paper) {
          min-width: 450px;
        }

        @media only screen and (max-width: 767px) {
          :global(.mu-dialog > div > div) {
            max-width: 90vw !important;
          }

          :global(.MuiDialog-paper) {
            min-width: auto !important;
          }
        }
      `}</style>
    </Dialog>
  );
};

export default withStyles(styles)(ModalDialog);
