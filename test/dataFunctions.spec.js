import { calcularRating, filtrarPelicula, ordenarPelicula} from '../src/lib/dataFunctions.js';
import { data as fakeData } from '../src/test/testdata.js';


//console.log(fakeData);

describe('filtrarPelicula', () => {
  it('returns comedy movies', () => {
    const comedyMovies = filtrarPelicula(fakeData,"generoDePelicula","Comedia");
    expect(comedyMovies).toStrictEqual([{"description": "Monsters, Inc., lanzada en 2001, presenta a Sulley y Mike, monstruos que asustan a niños para obtener energía. La historia se desarrolla cuando una niña llamada Boo entra al mundo de los monstruos. La película destaca la amistad y la superación del miedo.", "facts": {"fechaDeLanzamiento": "2 de noviembre de 2001", "generoDePelicula": "Comedia", "rating": 8.1}, "id": "monsters-inc", "imageUrl": "https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg", "name": "Monsters, Inc.", "shortdescription": "Monstruos asustan niños para obtener energía."}, {"description": "Cars, lanzada en 2006, sigue a Rayo McQueen, un coche de carreras, mientras aprende lecciones de vida en un pequeño pueblo llamado Radiator Springs. La película destaca la importancia de la humildad y la amistad.", "facts": {"fechaDeLanzamiento": "9 de junio de 2006", "generoDePelicula": "Comedia", "rating": 7.1}, "id": "cars", "imageUrl": "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg", "name": "Cars", "shortdescription": "Coche de carreras aprende lecciones de vida."}]);
  });
});

describe('ordenarPelicula', () => {
  it('returns sorted movies 1-10', () => {
    const sortedMovies = ordenarPelicula(fakeData,"rating","1-10");
    expect(sortedMovies).toStrictEqual([{"description": "Cars, lanzada en 2006, sigue a Rayo McQueen, un coche de carreras, mientras aprende lecciones de vida en un pequeño pueblo llamado Radiator Springs. La película destaca la importancia de la humildad y la amistad.", "facts": {"fechaDeLanzamiento": "9 de junio de 2006", "generoDePelicula": "Comedia", "rating": 7.1}, "id": "cars", "imageUrl": "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg", "name": "Cars", "shortdescription": "Coche de carreras aprende lecciones de vida."}, {"description": "Bichos, lanzada en 1998, sigue a Flik, una hormiga, mientras reúne a un grupo de insectos para enfrentarse a los temibles saltamontes y salvar su colonia. La película destaca el valor y la importancia de la colaboración.", "facts": {"fechaDeLanzamiento": "20 de noviembre de 1998", "generoDePelicula": "Familiar", "rating": 7.2}, "id": "bichos-una-aventura-en-miniatura", "imageUrl": "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", "name": "Bichos: Una aventura en miniatura", "shortdescription": "Hormigas vs saltamontes para salvar colonia."}, {"description": "Los Increibles, lanzada en 2004, sigue a la familia Parr, una familia de superhéroes que lucha contra el villano Syndrome. La película aborda temas de identidad, familia y aceptación de uno mismo.", "facts": {"fechaDeLanzamiento": "27 de octubre de 2004", "generoDePelicula": "Acción", "rating": 8}, "id": "los-increibles", "imageUrl": "https://musicart.xboxlive.com/7/3aae1000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", "name": "Los Increibles", "shortdescription": "Familia de superhéroes lucha contra villano."}, {"description": "Monsters, Inc., lanzada en 2001, presenta a Sulley y Mike, monstruos que asustan a niños para obtener energía. La historia se desarrolla cuando una niña llamada Boo entra al mundo de los monstruos. La película destaca la amistad y la superación del miedo.", "facts": {"fechaDeLanzamiento": "2 de noviembre de 2001", "generoDePelicula": "Comedia", "rating": 8.1}, "id": "monsters-inc", "imageUrl": "https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg", "name": "Monsters, Inc.", "shortdescription": "Monstruos asustan niños para obtener energía."}, {"description": 
    "Buscando a Nemo, lanzada en 2003, sigue a Marlin, un pez payaso, en su viaje épico para encontrar a su hijo Nemo, capturado por un buceador y llevado a un acuario. La película explora el coraje, la superación de los miedos y la importancia del amor paternal.", "facts": {"fechaDeLanzamiento": "30 de mayo de 2003", "generoDePelicula": "Familiar", "rating": 8.1}, "id": "buscando-a-nemo", "imageUrl": "https://m.media-amazon.com/images/I/81J7E7J2uhL._AC_UF894,1000_QL80_.jpg", "name": "Buscando a Nemo", "shortdescription": "Padre pez busca a hijo perdido en vasto océano."}, {"description": "Toy Story es la primera película de Pixar, lanzada en 1995. La historia sigue a Woody, un vaquero, y Buzz Lightyear, un astronauta, mientras luchan por encontrar su lugar en el mundo de los juguetes. La película destaca la importancia de la amistad y la aceptación.", "facts": {"fechaDeLanzamiento": "22 de noviembre de 1995", "generoDePelicula": "Aventura", "rating": 8.3}, "id": "toy-story", "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg", "name": "Toy Story", "shortdescription": "Juguetes que cobran vida en aventuras emocionantes."}]);
  });
});

describe('calcularRating', () => {
  it('returns rating for movies', () => {
    expect(calcularRating(fakeData)).toBe("7.80");
  });
});