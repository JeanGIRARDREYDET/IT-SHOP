import { Box, Button, Input, InputLabel } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { IProduct } from "../../types/product"
import ProductForm from "../productForm/ProductForm"
import SearchBar from "../searchBar/SearchBar"

const UpdateProduct = () => {
  const [product, setProduct] = useState<IProduct | null>(null)
  const [isProductForm, setisProductForm] = useState(false)

  const handleSearch = (event: SyntheticEvent<Element, Event>, value: IProduct | null) => {
    console.log(`${value}`)
    setProduct(prev => ({...prev, ...value}))
    setisProductForm(true)
    // return redirect(`/product/${value?._id}`)
  }

  const updateProduct = () => {

  }

  const prod = {
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
    <>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
        {!product && <h2>{`Modifier un produit`}</h2>}
        {product &&<h2>{`Modifier ${product?.brand} de la marque ${product?.brand}`}</h2>}
        <SearchBar onSearch={handleSearch} />
        {isProductForm && <ProductForm product={product} />}
      </Box>
      
    </>
  )
}
export default UpdateProduct