import { Container } from "./styles";
import imagePlaceholder from '../../assets/image-not-found-icon.svg';

// Importações de imagens
import aguardente from '../../assets/aguardente.png';
import alface from '../../assets/alface.png';
import ameixa from '../../assets/ameixa.png';
import amendoas from '../../assets/amendoas.png';
import aniz from '../../assets/aniz.png';
import aspargo from '../../assets/aspargo.png';
import bacon from '../../assets/bacon.png';
import batata from '../../assets/batata.png';
import cafe from '../../assets/cafe.png';
import camarao from '../../assets/camarao.png';
import canela from '../../assets/canela.png';
import cebola from '../../assets/cebola.png';
import claras from '../../assets/claras.png';
import coca from '../../assets/coca.png';
import damasco from '../../assets/damasco.png';
import farinha from '../../assets/farinha.png';
import filet from '../../assets/filet.png'; // Alterado de filé para filet para corresponder à variável
import limao from '../../assets/limao.png';
import maca from '../../assets/maca.png';
import manjericao from '../../assets/manjericao.png';
import maracuja from '../../assets/maracuja.png';
import massa from '../../assets/massa.png';
import morango from '../../assets/morango.png';
import negroni from '../../assets/negroni.png';
import paoNaan from '../../assets/pao_naan.png';
import pao from '../../assets/pao.png';
import pepino from '../../assets/pepino.png';
import pessego from '../../assets/pessego.png';
import pesto from '../../assets/pesto.png';
import presunto from '../../assets/presunto.png';
import queijo from '../../assets/queijo.png';
import rabanete from '../../assets/rabanete.png';
import rucula from '../../assets/rucula.png';
import sorvete from '../../assets/sorvete.png';
import tomate from '../../assets/tomate.png';
import whiskey from '../../assets/whiskey.png';

const ingredientImages = {
    aguardente, alface, ameixa, amendoas, aniz, aspargo, bacon, batata, café: cafe, camarão: camarao, canela, cebola, claras, "coca-cola": coca, damasco, farinha, filé: filet, limão: limao, maçã: maca, manjericão: manjericao, maracujá: maracuja, massa, morango, negroni, pão: pao, "pão naan": paoNaan, pepino, pêssego: pessego, pesto, presunto, queijo, rabanete, rucula, sorvete, tomate, whiskey
};

export function Ingredients({ ingredient }) {
    function fetchImageIngredient(name) {
        let ingredientKey = name.toLowerCase().trim();
        return ingredientImages[ingredientKey] || imagePlaceholder;
    }

    let ingredientImage = fetchImageIngredient(ingredient);
    
    return (
        <Container>
            <div className="ingredients">
                <div>
                  <img src={ingredientImage} alt="Imagem do ingrediente" />
                  <p>{ingredient}</p>
                </div>
            </div>
        </Container>
    );
}
