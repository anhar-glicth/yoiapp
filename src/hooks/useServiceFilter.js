import { useState, useEffect } from 'react'

export const useServiceFilter = (initialData) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [faskesType, setFaskesType] = useState('Semua Faskes')
  const [selectedDay, setSelectedDay] = useState('Semua Hari')
  const [selectedLocation, setSelectedLocation] = useState('Semua Lokasi')
  const [sortByDistance, setSortByDistance] = useState(false)
  const [filteredData, setFilteredData] = useState(initialData)

  const applyFilters = () => {
    let filtered = [...initialData].filter(item => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.specialty && item.specialty.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchDay = selectedDay === 'Semua Hari' || item.day === selectedDay.toUpperCase()
      
      return matchSearch && matchDay
    })

    if (sortByDistance) {
      filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
    }

    setFilteredData(filtered)
  }

  const resetFilters = () => {
    setSearchTerm('')
    setFaskesType('Semua Faskes')
    setSelectedDay('Semua Hari')
    setSelectedLocation('Semua Lokasi')
    setSortByDistance(false)
    setFilteredData(initialData)
  }

  return {
    searchTerm, setSearchTerm,
    faskesType, setFaskesType,
    selectedDay, setSelectedDay,
    selectedLocation, setSelectedLocation,
    sortByDistance, setSortByDistance,
    filteredData,
    applyFilters,
    resetFilters
  }
}
