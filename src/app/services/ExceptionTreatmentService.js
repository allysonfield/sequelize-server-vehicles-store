class ExceptionTreatmentService {
  async execute({ error, res }) {
    if (error.errors) {
      console.log(error.errors);
      return res.json({ message: error.errors[0].message });
    }

    if (error.name) {
      console.log(error.name);
      if (error.name === 'SequelizeHostNotReachableError') {
        return res.json({
          message: 'Data base temporally unavailable',
        });
      }
    }
    console.log(error);
    return res.status(404).json(error);
  }
}

module.exports = new ExceptionTreatmentService();
