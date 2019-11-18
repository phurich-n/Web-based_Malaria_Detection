function DecisionTree(hist) {
    var classes
    if (hist[101] <= 0.0) {
        if (hist[103] <= 0) {
            if (hist[107] <= 0) {
                if (hist[116] <= 0) {
                    if (hist[117] <= 0) {
                        if (hist[105] <= 0) {
                            if (hist[95] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[64] <= 0.011) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        if (hist[43] <= 0) {
                            if (hist[128] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                } else {
                    if (hist[123] <= 0.001) {
                        if (hist[201] <= 0.001) {
                            if (hist[44] <= 0.231) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Uninfected';
                        }
                    } else {
                        if (hist[90] <= 0) {
                            classes = 'Parasitized';
                        } else {
                            classes = 'Uninfected';
                        }
                    }
                }
            } else {
                if (hist[89] <= 0.048) {
                    if (hist[196] <= 0.001) {
                        if (hist[0] <= 0.616) {
                            if (hist[3] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[107] <= 0.001) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    classes = 'Uninfected';
                }
            }
        } else {
            if (hist[81] <= 0.026) {
                if (hist[189] <= 0.002) {
                    if (hist[73] <= 0.506) {
                        if (hist[78] <= 0.214) {
                            if (hist[113] <= 0) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Uninfected';
                        }
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    classes = 'Uninfected';
                }
            } else {
                if (hist[109] <= 0) {
                    if (hist[121] <= 0) {
                        if (hist[0] <= 0.795) {
                            if (hist[78] <= 0.039) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[78] <= 0.114) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        classes = 'Parasitized';
                    }
                } else {
                    if (hist[195] <= 0.001) {
                        if (hist[99] <= 0.002) {
                            if (hist[82] <= 0.473) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Uninfected';
                        }
                    } else {
                        classes = 'Uninfected';
                    }
                }
            }
        }
    } else {
        if (hist[141] <= 0.0) {
            if (hist[101] <= 0.016) {
                if (hist[134] <= 0.0) {
                    if (hist[81] <= 0.018) {
                        if (hist[70] <= 0.134) {
                            if (hist[97] <= 0.007) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Uninfected'
                            }
                        } else {
                            if (hist[140] <= 0.0) {
                                classes = 'Uninfected'
                            } else {
                                classes = 'Parasitized'
                            }
                        }
                    } else {
                        if (hist[132] <= 0.0) {
                            if (hist[129] <= 0.0) {
                                classes = 'Uninfected'
                            } else {
                                classes = 'Parasitized'
                            }
                        } else {
                            if (hist[120] <= 0.003) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Uninfected'
                            }
                        }
                    }
                } else {
                    if (hist[117] <= 0.01) {
                        if (hist[210] <= 0.002) {
                            if (hist[145] <= 0.0) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Parasitized'
                            }
                        } else {
                            classes = 'Uninfected'
                        }
                    } else {
                        classes = 'Uninfected'
                    }
                }
            } else {
                if (hist[152] <= 0.0) {
                    if (hist[153] <= 0.0) {
                        if (hist[161] <= 0.0) {
                            if (hist[56] <= 0.0) {
                                classes = 'Uninfected'
                            } else {
                                classes = 'Uninfected'
                            }
                        } else {
                            classes = 'Parasitized'
                        }
                    } else {
                        classes = 'Parasitized'
                    }
                } else {
                    if (hist[117] <= 0.069) {
                        if (hist[59] <= 0.041) {
                            if (hist[76] <= 0.083) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Uninfected'
                            }
                        } else {
                            classes = 'Uninfected'
                        }
                    } else {
                        if (hist[204] <= 0.0) {
                            classes = 'Uninfected'
                        } else {
                            classes = 'Parasitized'
                        }
                    }
                }
            }
        } else {
            if (hist[129] <= 0.014) {
                if (hist[16] <= 0.462) {
                    if (hist[111] <= 0.229) {
                        if (hist[173] <= 0.005) {
                            if (hist[241] <= 0.004) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Uninfected'
                            }
                        } else {
                            if (hist[107] <= 0.002) {
                                classes = 'Uninfected'
                            } else {
                                classes = 'Parasitized'
                            }
                        }
                    } else {
                        if (hist[156] <= 0.001) {
                            classes = 'Uninfected'
                        } else {
                            classes = 'Parasitized'
                        }
                    }
                } else {
                    if (hist[120] <= 0.0) {
                        classes = 'Parasitized'
                    } else {
                        classes = 'Uninfected'
                    }
                }
            } else {
                if (hist[172] <= 0.0) {
                    if (hist[199] <= 0.0) {
                        if (hist[75] <= 0.032) {
                            if (hist[191]) {
                                classes = 'Uninfected'
                            } else {
                                classes = 'Parasitized'
                            }
                        } else {
                            classes = 'Parasitized'
                        }
                    } else {
                        classes = 'Parasitized'
                    }
                } else {
                    if (hist[86] <= 0.001) {
                        if (hist[138] <= 0.0) {
                            if (hist[56] <= 0.014) {
                                classes = 'Parasitized'
                            } else {
                                classes = 'Uninfected'
                            }
                        } else {
                            classes = 'Uninfected'
                        }
                    } else {
                        classes = 'Uninfected'
                    }
                }

            }
        }
    }
    console.log(classes)
    return classes
}