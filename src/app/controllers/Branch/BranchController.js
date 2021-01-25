import Branch from '../../models/branch';

class BranchController {
  async index(req, res) {
    const branch = await Branch.findAll();

    return res.json(branch);
  }
}

export default new BranchController();
