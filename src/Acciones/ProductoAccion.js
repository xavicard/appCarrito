const LISTA_PRODUCTOS='LISTA_PRODUCTOS'
const LISTA_VACIA='LISTA_VACIA'

export function actionProducto() {
    return async (dispatch) =>{
        fetch('https://60189570971d850017a40130.mockapi.io/api/v1/productos')
        .then(res=>res.json())
        .then(data=>{
            if(data.length==0)
                dispatch(productoError())
            else
                dispatch(listarProducto(data))
        })
    }
}
const listarProducto=dato=>(
    {
        type:LISTA_PRODUCTOS,
        payload:dato
    }
)
const productoError=()=>(
    {
        type:LISTA_VACIA
    }
)
