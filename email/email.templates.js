
module.exports = {

  confirm: id => ({
    subject: 'React Confirm Email',
    html: `
      <a href='${process.env.CORS_ALLOWED}/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: ${process.env.CORS_ALLOWED}/confirm/${id}`
  })
  
}