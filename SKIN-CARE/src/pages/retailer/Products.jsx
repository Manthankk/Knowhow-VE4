import React, { useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: currentProduct ? currentProduct.id : Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock)
    }

    if (currentProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === currentProduct.id ? newProduct : product))
      )
    } else {
      setProducts((prevProducts) => [...prevProducts, newProduct])
    }
    closeModal()
  }

  const openModal = (product = null) => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        stock: product.stock.toString()
      })
      setCurrentProduct(product)
    } else {
      setFormData({ name: '', description: '', price: '', stock: '' })
      setCurrentProduct(null)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({ name: '', description: '', price: '', stock: '' })
    setCurrentProduct(null)
  }

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  }

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-teal-500">Manage Products</h1>
        <button
          onClick={() => openModal()}
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700"
        >
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.description}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => openModal(product)}
                    className="text-violet-600 hover:text-violet-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No products added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              {currentProduct ? 'Edit Product' : 'Add Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stock</label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700"
                >
                  {currentProduct ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products