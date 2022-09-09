import {ShowcaseItemContainer, ShowcaseItemOverlay} from "./styles";

const ShowcaseItem = ({
                          image,
                          title,
                          isTitleDark = false
                      }) => {
    return <ShowcaseItemContainer>
        <img src={`/assets/ShopMain/${image}`} alt={title}/>
        <ShowcaseItemOverlay $isTitleDark={isTitleDark}>
            <h2>{title}</h2>
            <button>지금 쇼핑하기</button>
        </ShowcaseItemOverlay>
    </ShowcaseItemContainer>
}

export default ShowcaseItem;