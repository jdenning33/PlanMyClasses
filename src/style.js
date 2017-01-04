//style.js
const style = {
  carousel: {
    minWidth:'150px',
    maxWidth:'300px',
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#aaaaaa'
  },
  scheduleBuilder: {
    minWidth:'200px',
    maxWidth:'400px',
    margin:'0 auto',
    padding: '15px',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#dddddd'
  },
  scheduleBuilderSub: {
    minWidth:'200px',
    maxWidth:'400px',
    margin:'0 auto',
    marginBottom:'10px',
    padding:'15px',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#bbbbbb'
  },
  carouselSection: {
    display: 'inline-block',
    width:'auto',
    verticalAlign:'top',
    // maxWidth:'400px',
    // margin:'2px',
    marginBottom:'10px',
    padding:'5px',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#444444',
    textAlign:'center',
  },
  title: {
    margin:'0 auto',
    textAlign:'center',
    fontWeight: 'bold',
  },
  carouselItem: {
    display: 'inline-block',
    width:'auto',
    verticalAlign:'top',
    // maxWidth:'400px',
    // margin:'2px',
    marginBottom:'10px',
    padding:'5px',
    paddingBottom: '0px',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#444444',
    textAlign:'center',
  },
  activeCarouselItem: {
    display: 'inline-block',
    width:'auto',
    verticalAlign:'top',
    // maxWidth:'400px',
    // margin:'2px',
    marginBottom:'10px',
    padding:'5px',
    fontFamily:'Helvetica, sans-serif',
    backgroundColor:'#aaaaaa',
    textAlign:'center',
  },



  //not mine
  commentList: {
    border:'1px solid #f1f1f1',
    padding:'0 12px',
    maxHeight:'70vh',
    overflow:'scroll'
  },
  comment: {
    backgroundColor:'#fafafa',
    margin:'10px',
    padding:'3px 10px',
    fontSize:'.85rem'
  },
  commentForm: {
    margin:'10px',
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-between'
  },
  commentFormAuthor: {
    minWidth:'150px',
    margin:'3px',
    padding:'0 10px',
    borderRadius:'3px',
    height:'40px',
    flex:'2'
  },
  commentFormText: {
    flex:'4',
    minWidth:'400px',
    margin:'3px',
    padding:'0 10px',
    height:'40px',
    borderRadius:'3px'
  },
  commentFormPost: {
    minWidth:'75px',
    flex:'1',
    height:'40px',
    margin:'5px 3px',
    fontSize:'1rem',
    backgroundColor:'#A3CDFD',
    borderRadius:'3px',
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:'.055rem',
    border:'none'
  },
  updateLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem'
  },
  deleteLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem',
    color:'red'
  }
}

module.exports = style;
