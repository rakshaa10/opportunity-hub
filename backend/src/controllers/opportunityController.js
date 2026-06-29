const prisma = require("../lib/prisma");

const getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await prisma.opportunity.findMany({
      include: {
        organizer: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(opportunities);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getOpportunityById = async (req, res) => {
  try {
    const { id } = req.params;

    const opportunity = await prisma.opportunity.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        organizer: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    res.status(200).json(opportunity);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      deadline,
      registrationLink,
      bannerUrl,
    } = req.body;

    const opportunity = await prisma.opportunity.create({
      data: {
        title,
        description,
        category,
        deadline: new Date(deadline),
        registrationLink,
        bannerUrl,
        organizerId: req.user.id,
      },
    });

    res.status(201).json({
      message: "Opportunity created successfully",
      opportunity,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateOpportunity = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      category,
      deadline,
      registrationLink,
      bannerUrl,
    } = req.body;

    // Check if opportunity exists
    const opportunity = await prisma.opportunity.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    // Ownership check
    if (opportunity.organizerId !== req.user.id) {
      return res.status(403).json({
        message: "You can only edit your own opportunities",
      });
    }

    const updatedOpportunity = await prisma.opportunity.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        description,
        category,
        deadline: new Date(deadline),
        registrationLink,
        bannerUrl,
      },
    });

    res.status(200).json({
      message: "Opportunity updated successfully",
      opportunity: updatedOpportunity,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteOpportunity = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if opportunity exists
    const opportunity = await prisma.opportunity.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    // Ownership check
    if (opportunity.organizerId !== req.user.id) {
      return res.status(403).json({
        message: "You can only delete your own opportunities",
      });
    }

    await prisma.opportunity.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({
      message: "Opportunity deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getMyOpportunities = async (req, res) => {
  try {
    console.log("Inside getMyOpportunities req.user =", req.user);

    const opportunities = await prisma.opportunity.findMany({
      where: {
        organizerId: req.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(opportunities);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllOpportunities,
  getOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
  getMyOpportunities,
};
