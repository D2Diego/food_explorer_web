// Styling Imports
import { Container, Content, Form } from "./styles.js";

// Theme Swap Imports
import { ThemeProvider } from "styled-components";
import { ThemeSlider } from "../../../components/ThemeSlider/index.jsx";
import { useDarkMode } from "../../../styles/useDarkMode.js";
import GlobalStyles from "../../../styles/global.js";
import lightTheme from "../../../styles/lightTheme.js";
import darkTheme from "../../../styles/theme.js";

// Components Imports
import { Header } from "../../../components/Header/index.jsx";
import { Footer } from "../../../components/Footer/index.jsx";
import { Button } from "../../../components/Button/index.jsx";
import { ButtonText } from "../../../components/ButtonText/index.jsx";
import { Input } from "../../../components/Input/index.jsx";
import { IngredientsTag } from "../../../components/IngredientsTag/index.jsx";
import { Textarea } from "../../../components/Textarea/index.jsx";
import { PageError } from "../../../components/PageError/index.jsx";

// Strategic Imports (API and others)
import { api } from "../../../services/api.js";
import { useAuth } from "../../../hooks/auth.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";

export function MakeDish() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;

  const { user } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleAddIngredient = () => {
    if (newIngredient.trim().length < 3) {
      alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      );
    } else {
      setIngredients((prevState) => [...prevState, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleNewDish = async () => {
    if (
      Object.values(formData).some((val) => val === "" || val === null) ||
      ingredients.length < 1
    ) {
      alert("Por favor, preencha todos os campos antes de submeter.");
      return;
    }

    setLoading(true);
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    ingredients.forEach((ingredient) => form.append("ingredients", ingredient));

    try {
      await api.post("/dishes", form);
      alert("Prato adicionado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(
        error.response ? error.response.data.message : "Erro ao criar o prato!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Header />

        {user.isAdmin ? (
          <Content>
            <ThemeSlider theme={theme} toggleTheme={toggleTheme} />

            <Form>
              <header>
                <Link to="/">
                  <ButtonText title="Voltar" icon={RiArrowLeftSLine} />
                </Link>
                <h1>Criar prato</h1>
              </header>

              <div className="details">
                <div className="dishImage">
                  <p>Imagem do Prato</p>
                  <label htmlFor="image">
                    <FiUpload size={24} />
                    Selecione imagem
                  </label>
                  <Input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>

                <div className="dish">
                  <p>Nome do prato</p>
                  <Input
                    placeholder="Ex.: Salada Caesar"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ingredientsTag">
                <div>
                  <p>Ingredientes</p>
                  <div className="ingredients">
                    {ingredients.map((ingredient, index) => (
                      <IngredientsTag
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))}

                    <IngredientsTag
                      isNew
                      placeholder="Adicionar"
                      onChange={(e) => setNewIngredient(e.target.value)}
                      value={newIngredient}
                      onClick={handleAddIngredient}
                    />
                  </div>
                </div>

                <div className="dishCategory">
                  <p>Categoria</p>

                  <select defaultValue={"default"} onChange={handleChange}>
                    <option value="default" disabled>
                      Selecione a categoria
                    </option>
                    <option value="dishes">Pratos</option>
                    <option value="drinks">Bebidas</option>
                    <option value="dessert">Sobremesas</option>
                  </select>
                </div>

                <div className="price">
                  <p>Preço</p>
                  <Input
                    name="price"
                    placeholder="R$ 00,00"
                    value={formData.price}
                    type="number"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="textarea">
                <p>Descrição</p>
                <Textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  defaultValue={formData.description}
                  onChange={handleChange}
                />
              </div>
            </Form>

            <div className="button">
              <Button
                title={loading ? "Salvando..." : "Salvar"}
                onClick={handleNewDish}
                disabled={loading}
              />
            </div>
          </Content>
        ) : (
          <PageError />
        )}

        <Footer />
      </Container>
    </ThemeProvider>
  );
}
