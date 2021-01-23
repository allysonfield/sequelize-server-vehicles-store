class ExceptionTreatmentService {
  async execute({ error, res }) {
    if (error.errors) {
      return res.json({ message: error.errors[0].message });
    }

    if (error.name) {
      if (error.name === "SequelizeHostNotReachableError") {
        return res.json({
          message: "Data base temporally unavailable",
        });
      }
    }
    return res.status(404).json(error);
  }
}

export default new ExceptionTreatmentService();
