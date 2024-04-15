export function Dibujo ({intentoMal}) {
    return (
        <svg width="50vw" height="40vh">
            <line className={intentoMal >= 1 ? " ": "horca"} x1="85%" y1="81%" x2="80%" y2="100%" />
            <line className={intentoMal >= 1 ? " ": "horca"} x1="85%" y1="81%" x2="90%" y2="100%" />
        
            <line  className={intentoMal >= 2 ? " ": "horca" }x1="85%" y1="0%" x2="85%" y2="100%" />                
            <line  className={intentoMal >= 3 ? " ": "horca" } x1="50%" y1="0%" x2="85%" y2="0%" />
            <line  className={intentoMal >= 4 ? " ": "horca" } x1="50%" y1="0%" x2="50%" y2="22%" />

            <circle className={intentoMal >= 5 ? "horca": "" } cx="48%" cy="30%" r="1%"/>
            <circle className={intentoMal >= 5 ? "horca": "" } cx="52%" cy="30%" r="1%"/>

            <line className={intentoMal >= 5 ? "persona" : "horca" } x1="47%" y1="31%" x2="49%" y2="29%" />
            <line className={intentoMal >= 5 ? "persona" : "horca" } x1="47%" y1="29%" x2="49%" y2="31%" />
            <line className={intentoMal >= 5 ? "persona" : "horca" } x1="51%" y1="31%" x2="53%" y2="29%" />
            <line className={intentoMal >= 5 ? "persona" : "horca" } x1="51%" y1="29%" x2="53%" y2="31%" />

            <circle className={intentoMal >= 5 ? "persona" : ""} cx="50%" cy="30%" r="5%"/>
            <line className={intentoMal >= 5 ? "persona" : ""} x1="50%" y1="38%" x2="50%" y2="60%" />
            <line className={intentoMal >= 5 ? "persona" : ""} x1="40%" y1="45%" x2="60%" y2="45%" />            
            <line className={intentoMal >= 5 ? "persona" : ""} x1="50%" y1="60%" x2="55%" y2="80%" />
            <line className={intentoMal >= 5 ? "persona" : ""} x1="50%" y1="60%" x2="45%" y2="80%" />

            <line className={intentoMal >= 5 ? "horca": "" } x1="40%" y1="81%" x2="60%" y2="81%" />
            <line className={intentoMal >= 5 ? "horca": "" } x1="42%" y1="81%" x2="42%" y2="100%" />
            <line className={intentoMal >= 5 ? "horca": "" } x1="58%" y1="81%" x2="58%" y2="100%" />
        </svg> 
    )
}