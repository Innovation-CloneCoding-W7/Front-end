import {ShowcaseHalfItemContainer, ShowcaseHalfItemOverlay, ShowcaseItemContainer, ShowcaseItemOverlay} from "./styles";

const ShowcaseItem = ({
                          image,
                          title,
                          isTitleDark = false,
<<<<<<< HEAD
                          isHalfWidth = false
=======
                          isHalfWidth = false,
                          isButtonBordered = false
>>>>>>> f131fbf7ada22d9de231fb6aa5f00efe84c21316
                      }) => {
    if (isHalfWidth) {
        return <ShowcaseHalfItemContainer>
            <img src={`/assets/ShopMain/${image}`} alt={title}/>
            <ShowcaseHalfItemOverlay $isTitleDark={isTitleDark}>
                <h2>{title}</h2>
                <button>지금 쇼핑하기</button>
            </ShowcaseHalfItemOverlay>
        </ShowcaseHalfItemContainer>
    } else {
        return <ShowcaseItemContainer>
            <img src={`/assets/ShopMain/${image}`} alt={title}/>
<<<<<<< HEAD
            <ShowcaseItemOverlay $isTitleDark={isTitleDark}>
=======
            <ShowcaseItemOverlay $isTitleDark={isTitleDark} $isButtonBordered={isButtonBordered}>
>>>>>>> f131fbf7ada22d9de231fb6aa5f00efe84c21316
                <h2>{title}</h2>
                <button>지금 쇼핑하기</button>
            </ShowcaseItemOverlay>
        </ShowcaseItemContainer>
    }
}

export default ShowcaseItem;