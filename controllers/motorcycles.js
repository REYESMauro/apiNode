import Motorcycles  from '../models/motorcycles.js'
const controller = {
    getMotorcycles: function (req, res) {
        Motorcycles.find({}).exec()
            .then(motorcyclesList => {
                if (!motorcyclesList) return res.status(404).send({ message: "No data  found" })
                return res.status(200).json(motorcyclesList)
            })
            .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    },
    getMotorcycle: function (req, res) {
        let motorcyclesId = req.params.id
        if (motorcyclesId == null) return res.status(404).send({ message: "motorcycles not found" })

        Motorcycles.findById(Motorcycles).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: "Motorcycles not found" })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error-> ${err}` }))
    },
    saveMotorcycles: function (req, res) {
        let motorcycles = new Motorcycles()
        const { reference, cc, engine_type, price, description, photo,  } = req.body
        if (reference && cc) {
            motorcycles.reference = reference
            motorcycles.cc = cc
            motorcycles.engine_type = engine_type
            motorcycles.price = price
            motorcycles.description = description
            motorcycles.photo = photo
            

            motorcycles.save()
                .then(storedMotorcycles => {
                    storedMotorcycles
                        ? res.status(200).json({ motorcycles: storedMotorcycles })
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },
    updateMotorcycles: function (req, res) {
        let motorcyclesId = req.params.id
        let update = req.body

        Motorcycles.findByIdAndUpdate(motorcyclesId, update, { returnDocument: 'after' })
            .then(updatedMotorcycles => {
                if (!updatedMotorcycles) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ motorcycles: updatedMotorcycles })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },
    deleteMotorcycles: function (req, res) {
        let motorcyclesId = req.params.id

        Motorcycles.findByIdAndRemove(motorcyclesId)
            .then(removedMotorcycles => {
                if (!removedMotorcycles) return res.status(404).send({ message: "The motorcycles does not exist" })
                return res.status(200).send({ motorcycles: removedMotorcycles })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}

export default controller