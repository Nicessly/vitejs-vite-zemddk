
import React from 'react';
import PostCard from './PostCard';
import perfil from './avatar.png';

function Post() {
  return (
    <div>
      <PostCard
        avatarSrc={perfil}
        author="Karla Sasa"
        date="Fecha con Hora"
        imageSrc="https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg"
        likesCount={10} 
        commentCount={5}
        imageFooter="Pie de imagen para la primera publicación."
      />
      <PostCard
        avatarSrc="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1714521600&semt=sph"
        author="Ana Mora"
        date="Fecha con Hora"
        imageSrc="https://imagenes.muyinteresante.es/files/image_414_276/uploads/2023/08/01/64c927ca910e0.jpeg"
        likesCount={10} 
        commentCount={5}
        imageFooter="Pie de imagen para la segunda publicación."
      />
    </div>
  );
}

export default Post;