import { Box, Button, Input, InputLabel } from "@mui/material"
import { useState } from "react"
import { IProduct } from "../../types/product"
import { useNavigate } from 'react-router-dom'

type Props = {
  product: IProduct | null
}
const ProductForm = ( { product }: Props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<Array<string>>([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [price, setPrice] = useState<number | null>(0)
  const [stock, setStock] = useState<number | null>(0)
  const [rating, setRating] = useState<number | null>(0)

  const updateProduct = () => {
    //fetch products/update
  }

  const CreateProduct = () => {
    // fetch /products/add
    const prod = {name, brand, description, images, categories, price, stock, rating,createdAt:new Date().toDateString()} 
    
    
    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({product: prod})};
    fetch(`${import.meta.env.VITE_API_URL}products/add`, requestOptions)
    .then(res=>{
        if(res.ok){
          navigate('/')
          
          alert("Vous êtes bien enregistré !")
        }
    })
    
  }

  const prodExample = {
    _id: {"$oid": "641208cfc6d56d7d313ba5be"},
    name: "Multiple-Chargeur.",
    brand: "LENCENT",
    description:"\n[Prise USB 6 en 1] 2 AC sortie, 3 ports USB et 1 port USB C sont la combinaison parfaite. Vous pouvez utiliser ce prise pour charger jusqu’à 6 appareils en même temps, la recharge ne nécessite pas d’attente. Installez facilement la prise de USB sur le mur. Ne vous inquiétez pas lorsque vous chargez vos appareils et votre appareil mobile.\n[Utilisation universelle]Le chargeur rapide USB C de 15W est équipé d’un port d’alimentation USB-C et d’une puissance de sortie de 15W pour recharger iPhone, iPad, le téléphone et la tablette à pleine vitesse. AC prise: Puissance maximale jusqu'à 4000 watts (max. 250 V, 16 A). Tension d'entrée des ports USB: 100 V - 240 V 0.3A. Sortie USB: 5V/3.4A(total), 5V/2.4A(connexion unique) Sortie USB C: 5V/3A 15W.\n[Technologie auto-ID exclusive]LENCENT la technologie AUTO-ID UNIQUE identifie automatiquement tous vos appareils et fournit le meilleur courant de charge pour une charge maximale et sûre.\n[Sécurité Supérieure]Boîtier de Matériau ignifuge en PC 750 °C. Les stores de sécurités internes empêchent les articles d’être insérés dans des prises pour assurer la sécurité de vous et de votre enfant. Les Protection de sécurité sont efficacement améliorées pour prévenir la surpression, la surcharge, le surcourage, le court-circuit, la surchauffe, la surcharge, etc.\n[Économisez de l’espace]Gagnez du temps et des efforts, sans avoir besoin de fils supplémentaires. Il y a un support téléphonique sur le dessus de le produit qui peut être placé sur là. Elle s’adapte aux prises de courant et ne tombe pas facilement du mur.La taille de 91.3 x 66.2 x 41.1 mm est pratique et compacte pour les voyages d’affaires ou à la maison.",
    images: ["LENCENT-Multiple-Chargeur1.jpg","LENCENT-Multiple-Chargeur2.jpg","LENCENT-Multiple-Chargeur3.jpg","LENCENT-Multiple-Chargeur4.jpg","LENCENT-Multiple-Chargeur5.jpg"],
    categories:["Chargeurs secteur"],
    price:{"$numberDouble":"46.3"},
    stock:{"$numberInt":"16"},
    createdAt:{"$date":{"$numberLong":"1642963210000"}},
    rating:{"$numberInt":"4"}
  }

  
  return (
      <Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="name-product">Nom</InputLabel>
        <Input id="name-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setName(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="brand-product">Marque</InputLabel>
        <Input id="brand-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setBrand(event.currentTarget.value)}/>
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="description-product">Description</InputLabel>
        <Input id="description-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setDescription(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="images-product">Images</InputLabel>
        <Input id="images-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setImages(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="categories-product">Catégories</InputLabel>
        <Input id="categories-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setCategories(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="price-product">Prix</InputLabel>
        <Input id="price-product" aria-describedby="my-helper-text" type="number" onKeyUp={(event)=>setPrice(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="stock-product">Stock</InputLabel>
        <Input id="stock-product" aria-describedby="my-helper-text" type="number" onKeyUp={(event)=>setStock(event.currentTarget.value)} />
      </Box>


      <Box sx={{p: 2}}>
            {product !== null ? (<Button variant="outlined" onClick={updateProduct} >Modifier ce produit</Button>): (<Button variant="outlined" onClick={(event)=>CreateProduct(event)} >Créer ce produit</Button>)}
      </Box>
    </Box>
  )
}
export default ProductForm