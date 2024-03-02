import {
  Container,
  FormSection,
  Label,
  Input,
  Select,
  TextArea,
} from "./styles";

import { HeaderWraper } from "../../../components/HeaderWraper";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import TagInput from "../../../components/TagInput";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

export function NewFood() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const { token, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleChangeNome = (e) => setNome(e.target.value);
  const handleChangePreco = (e) => setPreco(e.target.value);
  const handleChangeDescricao = (e) => setDescricao(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAdmin) {
      alert("Apenas administradores podem adicionar pratos.");
      return;
    }

    const pratoData = {
      nome,
      categoria_id: categoria,
      ingredientes,
      preco,
      descricao,
    };

    try {
      await api.post("/pratos", pratoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar prato");
    }
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get("/categorias", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
        alert("Erro ao buscar categorias");
      }
    };

    fetchCategorias();
  }, [token]);

  return (
    <Container>
      <HeaderWraper buttonText="Novo Prato" IsAdmin spanText="Admin" />

      <main>
        <Link to="/foodAdmin/id">
          <FaAngleLeft /> Voltar
        </Link>

        <FormSection onSubmit={handleSubmit}>
          <h1>Adicionar prato</h1>

          <div>
            <div className="first_line">
              <div>
                <h1 className="h1_fileLabel">Imagem do prato</h1>
                <Label htmlFor="food" className="label_file">
                  {" "}
                  Selecione a imagem
                  <Input id="food" type="file" className="input_file" />
                </Label>
              </div>

              <Label>
                Nome
                <Input
                  type="text"
                  placeholder="Ex: Salada Caesar"
                  onChange={handleChangeNome}
                />
              </Label>

              <Label>
                Categoria
                <Select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </Select>
              </Label>
            </div>

            <div className="second_line">
              <Label className="label-ingrediente">
                Ingredientes
                <div className="ingrediente_line">
                  <TagInput
                    selected={ingredientes}
                    setSelected={setIngredientes}
                    name="ingredientes"
                    placeHolder="Digite os ingredientes"
                  />
                </div>
              </Label>

              <Label>
                Preço
                <Input
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={handleChangePreco}
                />
              </Label>
            </div>
          </div>

          <Label>
            Descrição
            <TextArea
              value={descricao}
              onChange={handleChangeDescricao}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </Label>

          <div className="line_button">
            <Button type="submit" text="Salvar prato" className="teste" />
          </div>
        </FormSection>
      </main>

      <Footer className="Footer" />
    </Container>
  );
}
