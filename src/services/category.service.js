const { category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<category>}
 */
const getCategoryList = async (filter, options) => {

  return category.find({ $or: [{is_active: true}] });
};

/**
 * Get category by name
 * @param {string} name
 * @returns {Promise<category>}
 */
const getCategoryByName = async (category_name) => {
  return category.findOne({ category_name });
};

/**
 * Get category details by id
 * @param {ObjectId} categoryId
 * @returns {Promise<category>}
 */
const getCategoryById = async (categoryId) => {
  return category.findById(categoryId);
};

/**
 * category details update by id
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<category>}
 */
const updateDetails = async (categoryId, updateBody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/**
 * Delete category
 * @param {ObjectId} categoryId
 * @returns {Promise<category>}
 */
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateDetails,
  getCategoryByName,
  deleteCategory,
};
