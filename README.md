# 🎶 LouveFeedback

Bem-vindo ao **LouveFeedback**! 👋

> Um aplicativo inovador para interação musical dentro da igreja, permitindo que colaboradores deem feedbacks e sugestões de músicas para melhorar a experiência da comunidade.

## 📌 Sobre o Projeto

O **LouveFeedback** foi desenvolvido como parte da disciplina de extensão da Estácio, com o objetivo de proporcionar um ambiente colaborativo onde os músicos possam compreender melhor os interesses da congregação. Através deste app, os fiéis podem curtir músicas e sugerir novas, auxiliando os músicos na criação de repertórios mais alinhados com a comunidade.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:
- **Frontend Mobile:** React Native
- **Backend API:** Spring Boot com Kotlin
- **Banco de Dados:** PostgreSQL
- **react-native-youtube-iframe:** Uma api do YouTube Ifame para react native

## 🏗 Arquitetura

A aplicação segue o padrão **MVC**  garantindo uma separação clara entre a interface do usuário e lógica de negócios. A API responsável por gerenciar a interação com o banco de dados.


## 🗄️ Banco
O banco de dados foi desenvolvido utilizando **PostgreSQL** e foi estruturado com **4 entidades principais**:

- **Users**: Responsável por armazenar os dados dos usuários.
- **Musics**: Armazena os dados das músicas.
- **LikedMusics**: Registra os "likes" dos usuários nas respectivas músicas.

![schema do banco](https://github.com/user-attachments/assets/0c5cdce8-3fb8-4f14-95b4-df924bda9b6d)



## 📦 Bibliotecas
- [**react-native-youtube-iframe:**](https://www.npmjs.com/package/react-native-youtube-iframe)

🔗 **Repositório da API:** [API Mobile](https://github.com/3vinicius/API_MOBILE)
