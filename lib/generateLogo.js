

function generateLogo(logo) {
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
     ${logo}
     
     <text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
     </svg>`
}