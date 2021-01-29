const Branch = require('../../models/branch');

class BranchController {
  async index(req, res) {
    const branch = await Branch.findAll();

    return res.json(branch);
  }
}

module.exports = new BranchController();
