const drawerWidth = 255;

const styles = theme => ({
    root: {
      flexGrow: 1,
      zIndex: 1,
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    menu: {
      overflowY: 'auto',
      '& :hover':{
        cursor: 'pointer',
      }
    },
    menuItem:{
      borderRadius: 10,
      color: 'white',
      background: '#5843BE',
      '& svg':{
        // background: 'white'
      }
    },
    appBar: {
      position: 'absolute',
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      background: '#ffffff',
      boxShadow: 'none',
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    button: {
      margin: theme.spacing.unit,
    },
    'tool-btn': {
        background: '#F3F3F3',
        color: '#707070',
        width: '100%',
        boxShadow: 'none',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    subHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      color: '#5843BE'
    },
    leftSubHead:{
      display: 'flex',
      alignItems: 'center',
      '& p':{
        marginLeft: 15,
        fontWeight: 500,
        fontSize: 32,
      }
    },
    dropdown1:{
      background: '#C30F70',
      border: '2px #C30F70 solid',
      color: '#ffffff',
      '& :hover':{
        background: 'white',
        color: '#C30F70'
      },
    },
    dropdown2:{
      background: '#5843BE',
      color: '#ffffff',
      border: '2px #5843BE solid',
      marginLeft: 25,
      '& :hover':{
        background: 'white',
        color: '#5843BE'
      },
    },
    drowdown:{
      position: 'relative'
    },
    options: {
      width: 150,
      position: 'absolute',
      top: 40,
      right: 0,
      maxHeight: 150,
      overflow: 'auto',
      color: '#ffffff',
      background: '#C30F70',
      padding: '5px 0',
      '& p':{
        margin: 2,
        textAlign: 'center',
      }
    },
    options1:{
      background: '#C30F70',
    },
    options2:{
      background: '#5843BE',
    },
    leftHead :{
      background: '#F6F7F8',
      color: '#5843BE',
      width: 430,
      display: 'flex',
      justifyContent: 'space-around',
      padding: 15,
      borderRadius: 20,
      marginTop: 5,
      '& span':{
        fontSize: 24,
        fontWeight: 500,
        alignItems : 'center',
        display: 'inline-flex',
      }
    },
    rightHead:{
      display: 'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      color: '#5843BE',
    },
    searchBar:{
      background: '#F6F7F8',
      padding: 15,
      borderRadius: 20,
      alignItems:'center',
      display: 'flex',
      width: 400,
      '& input':{
        fontSize : 25,
        border: 'none',
        background: 'transparent',
        padding: '0 5px',
        width: '100%'
      },
      '& ::placeholder':{
        color: '#5843BE',
        fontSize: 24,
      },
      '& :focus':{
        outline: 'none'
      },
    },
    profile: {
      background: '#F6F7F8',
      padding: 5,
      borderRadius: 15,
      marginLeft: 10,
      display: 'flex',
      alignItems: 'center',
      '& img':{
        borderRadius: '50%',
        width: 45,
        height: 45,
        marginLeft: 15,
      },
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    show: {
      display: 'block'
    },
    hide: {
      display: 'none'
    },
  });

  export default styles